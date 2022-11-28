import { SpeakeasyBase } from "../../../internal/utils";
export declare class CampaignListQueryParams extends SpeakeasyBase {
    includeArchived?: string;
    lastEditTimeGt?: string;
    page?: string;
    sortDirection?: string;
}
export declare class CampaignListRequest extends SpeakeasyBase {
    queryParams: CampaignListQueryParams;
}
export declare class CampaignListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
