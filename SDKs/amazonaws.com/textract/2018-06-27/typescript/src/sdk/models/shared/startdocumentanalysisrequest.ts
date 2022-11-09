import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentLocation } from "./documentlocation";
import { FeatureTypeEnum } from "./featuretypeenum";
import { NotificationChannel } from "./notificationchannel";
import { OutputConfig } from "./outputconfig";


export class StartDocumentAnalysisRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=DocumentLocation" })
  documentLocation: DocumentLocation;

  @Metadata({ data: "json, name=FeatureTypes" })
  featureTypes: FeatureTypeEnum[];

  @Metadata({ data: "json, name=JobTag" })
  jobTag?: string;

  @Metadata({ data: "json, name=KMSKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=NotificationChannel" })
  notificationChannel?: NotificationChannel;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig?: OutputConfig;
}
