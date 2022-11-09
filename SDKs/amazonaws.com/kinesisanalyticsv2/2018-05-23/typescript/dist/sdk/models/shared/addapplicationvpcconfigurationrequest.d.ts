import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcConfiguration } from "./vpcconfiguration";
export declare class AddApplicationVpcConfigurationRequest extends SpeakeasyBase {
    applicationName: string;
    conditionalToken?: string;
    currentApplicationVersionId?: number;
    vpcConfiguration: VpcConfiguration;
}
