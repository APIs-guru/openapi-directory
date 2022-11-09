import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";


export class AddApplicationVpcConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @Metadata({ data: "json, name=VpcConfigurationDescription" })
  vpcConfigurationDescription?: VpcConfigurationDescription;
}
