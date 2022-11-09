import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetChannelsQueryParams extends SpeakeasyBase {
    lang: shared.LangEnum;
    region?: string;
}
export declare class GetChannelsRequest extends SpeakeasyBase {
    queryParams: GetChannelsQueryParams;
}
export declare class GetChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
