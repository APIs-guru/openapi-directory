import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerCatalogStatusEnum } from "./servercatalogstatusenum";
import { Server } from "./server";



export class GetServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastModifiedOn" })
  lastModifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=serverCatalogStatus" })
  serverCatalogStatus?: ServerCatalogStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=serverList", elemType: Server })
  serverList?: Server[];
}
