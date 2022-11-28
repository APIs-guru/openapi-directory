import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TariffcomponentsQueryParams extends SpeakeasyBase {
    email?: string;
    kwha?: number;
    milliseconds?: number;
    wh?: number;
    zipcode?: string;
}
export declare class TariffcomponentsRequest extends SpeakeasyBase {
    queryParams: TariffcomponentsQueryParams;
}
export declare class TariffcomponentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    componentsh0?: shared.Componentsh0;
}
