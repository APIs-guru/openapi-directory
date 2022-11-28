import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Search extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;
}
