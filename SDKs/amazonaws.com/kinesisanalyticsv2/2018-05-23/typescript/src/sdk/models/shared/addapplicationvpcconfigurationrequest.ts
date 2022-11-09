import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcConfiguration } from "./vpcconfiguration";


export class AddApplicationVpcConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=ConditionalToken" })
  conditionalToken?: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId?: number;

  @Metadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration: VpcConfiguration;
}
