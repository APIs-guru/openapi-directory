import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelDefinition } from "./channeldefinition";
import { Media } from "./media";
import { CallAnalyticsJobSettings } from "./callanalyticsjobsettings";


export class StartCallAnalyticsJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallAnalyticsJobName" })
  callAnalyticsJobName: string;

  @Metadata({ data: "json, name=ChannelDefinitions", elemType: shared.ChannelDefinition })
  channelDefinitions?: ChannelDefinition[];

  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @Metadata({ data: "json, name=Media" })
  media: Media;

  @Metadata({ data: "json, name=OutputEncryptionKMSKeyId" })
  outputEncryptionKmsKeyId?: string;

  @Metadata({ data: "json, name=OutputLocation" })
  outputLocation?: string;

  @Metadata({ data: "json, name=Settings" })
  settings?: CallAnalyticsJobSettings;
}
