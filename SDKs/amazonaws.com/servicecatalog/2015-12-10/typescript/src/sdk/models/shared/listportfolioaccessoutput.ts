import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPortfolioAccessOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
