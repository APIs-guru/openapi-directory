import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountModification } from "./accountmodification";


export class DescribeAccountModificationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountModifications", elemType: shared.AccountModification })
  accountModifications?: AccountModification[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
