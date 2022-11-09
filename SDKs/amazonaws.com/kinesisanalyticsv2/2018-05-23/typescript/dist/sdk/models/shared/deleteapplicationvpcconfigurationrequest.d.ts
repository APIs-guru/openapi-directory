import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteApplicationVpcConfigurationRequest extends SpeakeasyBase {
    applicationName: string;
    conditionalToken?: string;
    currentApplicationVersionId?: number;
    vpcConfigurationId: string;
}
