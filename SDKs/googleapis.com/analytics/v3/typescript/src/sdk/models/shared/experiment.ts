import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExperimentParentLink
/** 
 * Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
**/
export class ExperimentParentLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ExperimentVariations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;

  @SpeakeasyMetadata({ data: "json, name=won" })
  won?: boolean;
}


// Experiment
/** 
 * JSON template for Analytics experiment resource.
**/
export class Experiment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=editableInGaUi" })
  editableInGaUi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=equalWeighting" })
  equalWeighting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumExperimentLengthInDays" })
  minimumExperimentLengthInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectiveMetric" })
  objectiveMetric?: string;

  @SpeakeasyMetadata({ data: "json, name=optimizationType" })
  optimizationType?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLink" })
  parentLink?: ExperimentParentLink;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonExperimentEnded" })
  reasonExperimentEnded?: string;

  @SpeakeasyMetadata({ data: "json, name=rewriteVariationUrlsAsOriginal" })
  rewriteVariationUrlsAsOriginal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=servingFramework" })
  servingFramework?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=trafficCoverage" })
  trafficCoverage?: number;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=variations", elemType: ExperimentVariations })
  variations?: ExperimentVariations[];

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=winnerConfidenceLevel" })
  winnerConfidenceLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=winnerFound" })
  winnerFound?: boolean;
}
