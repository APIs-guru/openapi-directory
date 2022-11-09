import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerCatalogStatusEnum } from "./servercatalogstatusenum";
import { Server } from "./server";


export class GetServersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastModifiedOn" })
  lastModifiedOn?: Date;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=serverCatalogStatus" })
  serverCatalogStatus?: ServerCatalogStatusEnum;

  @Metadata({ data: "json, name=serverList", elemType: shared.Server })
  serverList?: Server[];
}
