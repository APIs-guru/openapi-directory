import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiVi200ApplicationJsonLinksHolidays extends SpeakeasyBase {
    href?: string;
}
export declare class GetApiVi200ApplicationJsonLinksProvinces extends SpeakeasyBase {
    href?: string;
}
export declare class GetApiVi200ApplicationJsonLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetApiVi200ApplicationJsonLinks extends SpeakeasyBase {
    holidays?: GetApiVi200ApplicationJsonLinksHolidays;
    provinces?: GetApiVi200ApplicationJsonLinksProvinces;
    self?: GetApiVi200ApplicationJsonLinksSelf;
}
export declare class GetApiVi200ApplicationJson extends SpeakeasyBase {
    links?: GetApiVi200ApplicationJsonLinks;
    message?: string;
}
export declare class GetApiViResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getApiVi200ApplicationJsonObject?: GetApiVi200ApplicationJson;
}
