import { SpeakeasyBase } from "../../../internal/utils";
import { ServerCatalogStatusEnum } from "./servercatalogstatusenum";
import { Server } from "./server";
export declare class GetServersResponse extends SpeakeasyBase {
    lastModifiedOn?: Date;
    nextToken?: string;
    serverCatalogStatus?: ServerCatalogStatusEnum;
    serverList?: Server[];
}
