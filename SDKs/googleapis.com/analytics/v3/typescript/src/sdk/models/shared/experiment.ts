import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// ExperimentParentLink
/** 
 * Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
**/
export class ExperimentParentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ExperimentVariations extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;

  @Metadata({ data: "json, name=won" })
  won?: boolean;
}


// Experiment
/** 
 * JSON template for Analytics experiment resource.
**/
export class Experiment extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=editableInGaUi" })
  editableInGaUi?: boolean;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=equalWeighting" })
  equalWeighting?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=minimumExperimentLengthInDays" })
  minimumExperimentLengthInDays?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectiveMetric" })
  objectiveMetric?: string;

  @Metadata({ data: "json, name=optimizationType" })
  optimizationType?: string;

  @Metadata({ data: "json, name=parentLink" })
  parentLink?: ExperimentParentLink;

  @Metadata({ data: "json, name=profileId" })
  profileId?: string;

  @Metadata({ data: "json, name=reasonExperimentEnded" })
  reasonExperimentEnded?: string;

  @Metadata({ data: "json, name=rewriteVariationUrlsAsOriginal" })
  rewriteVariationUrlsAsOriginal?: boolean;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=servingFramework" })
  servingFramework?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=trafficCoverage" })
  trafficCoverage?: number;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=variations", elemType: shared.ExperimentVariations })
  variations?: ExperimentVariations[];

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;

  @Metadata({ data: "json, name=winnerConfidenceLevel" })
  winnerConfidenceLevel?: number;

  @Metadata({ data: "json, name=winnerFound" })
  winnerFound?: boolean;
}
