import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActiveNamesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeNames" })
  activeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
