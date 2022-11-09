import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApplicationVpcConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=ConditionalToken" })
  conditionalToken?: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId?: number;

  @Metadata({ data: "json, name=VpcConfigurationId" })
  vpcConfigurationId: string;
}
