import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Protection } from "./protection";



export class ListProtectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Protections", elemType: Protection })
  protections?: Protection[];
}
