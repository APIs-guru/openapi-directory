import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";


export class DescribeFilterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: Filter;
}
