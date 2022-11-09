import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Patch } from "./patch";


export class DescribeAvailablePatchesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Patches", elemType: shared.Patch })
  patches?: Patch[];
}
