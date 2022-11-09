import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";
export declare class AddApplicationVpcConfigurationResponse extends SpeakeasyBase {
    applicationArn?: string;
    applicationVersionId?: number;
    vpcConfigurationDescription?: VpcConfigurationDescription;
}
