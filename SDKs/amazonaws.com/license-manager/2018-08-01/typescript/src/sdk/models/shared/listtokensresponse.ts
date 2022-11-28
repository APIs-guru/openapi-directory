import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TokenData } from "./tokendata";



export class ListTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Tokens", elemType: TokenData })
  tokens?: TokenData[];
}
