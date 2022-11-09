import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPortfolioAccessOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
