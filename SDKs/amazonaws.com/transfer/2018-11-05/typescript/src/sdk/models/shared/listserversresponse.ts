import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListedServer } from "./listedserver";


export class ListServersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Servers", elemType: shared.ListedServer })
  servers: ListedServer[];
}
