import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Studio } from "./studio";



export class ListStudiosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=studios", elemType: Studio })
  studios?: Studio[];
}
