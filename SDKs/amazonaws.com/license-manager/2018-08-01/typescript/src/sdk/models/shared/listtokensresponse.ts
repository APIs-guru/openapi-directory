import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TokenData } from "./tokendata";


export class ListTokensResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Tokens", elemType: shared.TokenData })
  tokens?: TokenData[];
}
