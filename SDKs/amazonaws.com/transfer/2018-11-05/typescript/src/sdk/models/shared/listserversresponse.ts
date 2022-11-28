import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListedServer } from "./listedserver";



export class ListServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Servers", elemType: ListedServer })
  servers: ListedServer[];
}
