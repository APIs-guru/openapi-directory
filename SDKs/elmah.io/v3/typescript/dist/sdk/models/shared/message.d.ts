import { SpeakeasyBase } from "../../../internal/utils";
import { Breadcrumb } from "./breadcrumb";
import { Item } from "./item";
export declare class Message extends SpeakeasyBase {
    application?: string;
    breadcrumbs?: Breadcrumb[];
    code?: string;
    cookies?: Item[];
    correlationId?: string;
    data?: Item[];
    dateTime?: Date;
    detail?: string;
    form?: Item[];
    hostname?: string;
    id?: string;
    method?: string;
    queryString?: Item[];
    serverVariables?: Item[];
    severity?: string;
    source?: string;
    statusCode?: number;
    title?: string;
    titleTemplate?: string;
    type?: string;
    url?: string;
    user?: string;
    version?: string;
}
