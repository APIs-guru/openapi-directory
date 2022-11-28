import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProfileCreationRequest extends SpeakeasyBase {
    languageCode?: string;
    name: string;
    pinEnabled?: boolean;
    purchaseEnabled?: boolean;
    segments?: string[];
}
