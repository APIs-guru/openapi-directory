import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedOperationEnum } from "./allowedoperationenum";
export declare class CreateGrantRequest extends SpeakeasyBase {
    allowedOperations: AllowedOperationEnum[];
    clientToken: string;
    grantName: string;
    homeRegion: string;
    licenseArn: string;
    principals: string[];
}
