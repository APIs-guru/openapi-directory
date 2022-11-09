import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActiveNamesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeNames" })
  activeNames?: string[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
