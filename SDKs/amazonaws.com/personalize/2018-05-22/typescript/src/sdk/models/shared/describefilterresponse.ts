import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



export class DescribeFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: Filter;
}
