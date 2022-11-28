import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Patch } from "./patch";



export class DescribeAvailablePatchesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Patches", elemType: Patch })
  patches?: Patch[];
}
