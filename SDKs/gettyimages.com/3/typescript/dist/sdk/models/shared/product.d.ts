import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DownloadRequirements } from "./downloadrequirements";
import { OverageDetails } from "./overagedetails";
import { ProductStatusEnum } from "./productstatusenum";
import { ProductTypeResponseEnum } from "./producttyperesponseenum";
export declare class Product extends SpeakeasyBase {
    agreementName?: string;
    applicationWebsite?: string;
    creditsRemaining?: number;
    downloadLimit?: number;
    downloadLimitDuration?: string;
    downloadLimitResetUtcDate?: Date;
    downloadRequirements?: DownloadRequirements;
    downloadsRemaining?: number;
    expirationUtcDate?: Date;
    id?: number;
    imagepackResolution?: string;
    name?: string;
    overage?: OverageDetails;
    status?: ProductStatusEnum;
    teamCredits?: number;
    type?: ProductTypeResponseEnum;
}
