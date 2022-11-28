import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelDefinition } from "./channeldefinition";
import { Media } from "./media";
import { CallAnalyticsJobSettings } from "./callanalyticsjobsettings";



export class StartCallAnalyticsJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallAnalyticsJobName" })
  callAnalyticsJobName: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelDefinitions", elemType: ChannelDefinition })
  channelDefinitions?: ChannelDefinition[];

  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Media" })
  media: Media;

  @SpeakeasyMetadata({ data: "json, name=OutputEncryptionKMSKeyId" })
  outputEncryptionKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputLocation" })
  outputLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: CallAnalyticsJobSettings;
}
