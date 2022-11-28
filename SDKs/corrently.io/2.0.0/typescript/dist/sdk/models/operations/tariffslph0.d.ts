import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TariffSlph0QueryParams extends SpeakeasyBase {
    zipcode?: string;
}
export declare class TariffSlph0Request extends SpeakeasyBase {
    queryParams: TariffSlph0QueryParams;
}
export declare class TariffSlph0Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tariffh0s?: shared.Tariffh0[];
}
