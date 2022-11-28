import { SpeakeasyBase } from "../../../internal/utils";
export declare class SeeContentBlockInformationQueryParams extends SpeakeasyBase {
    contentBlockId?: string;
    includeInclusionData?: string;
}
export declare class SeeContentBlockInformationRequest extends SpeakeasyBase {
    queryParams: SeeContentBlockInformationQueryParams;
}
export declare class SeeContentBlockInformationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
