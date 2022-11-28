import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";



export class AddApplicationVpcConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=VpcConfigurationDescription" })
  vpcConfigurationDescription?: VpcConfigurationDescription;
}
