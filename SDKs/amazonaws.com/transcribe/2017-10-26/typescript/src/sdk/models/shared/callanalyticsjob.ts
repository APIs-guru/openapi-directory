import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";
import { ChannelDefinition } from "./channeldefinition";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { CallAnalyticsJobSettings } from "./callanalyticsjobsettings";
import { Transcript } from "./transcript";


// CallAnalyticsJob
/** 
 * Describes an asynchronous analytics job that was created with the <code>StartAnalyticsJob</code> operation.
**/
export class CallAnalyticsJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallAnalyticsJobName" })
  callAnalyticsJobName?: string;

  @Metadata({ data: "json, name=CallAnalyticsJobStatus" })
  callAnalyticsJobStatus?: CallAnalyticsJobStatusEnum;

  @Metadata({ data: "json, name=ChannelDefinitions", elemType: shared.ChannelDefinition })
  channelDefinitions?: ChannelDefinition[];

  @Metadata({ data: "json, name=CompletionTime" })
  completionTime?: Date;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=IdentifiedLanguageScore" })
  identifiedLanguageScore?: number;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=Media" })
  media?: Media;

  @Metadata({ data: "json, name=MediaFormat" })
  mediaFormat?: MediaFormatEnum;

  @Metadata({ data: "json, name=MediaSampleRateHertz" })
  mediaSampleRateHertz?: number;

  @Metadata({ data: "json, name=Settings" })
  settings?: CallAnalyticsJobSettings;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Transcript" })
  transcript?: Transcript;
}
