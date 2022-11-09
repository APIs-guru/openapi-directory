import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimensions } from "./dimensions";
import { DownloadDetails } from "./downloaddetails";
import { User } from "./user";
export declare class HistoricalDownload extends SpeakeasyBase {
    agreementName?: string;
    assetType?: string;
    dateDownloaded?: Date;
    dimensions?: Dimensions;
    downloadDetails?: DownloadDetails;
    downloadSource?: string;
    id?: string;
    productId?: number;
    productType?: string;
    sizeName?: string;
    thumbUri?: string;
    user?: User;
}
