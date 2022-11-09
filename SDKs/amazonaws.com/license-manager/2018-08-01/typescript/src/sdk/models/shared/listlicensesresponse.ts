import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { License } from "./license";


export class ListLicensesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Licenses", elemType: shared.License })
  licenses?: License[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
