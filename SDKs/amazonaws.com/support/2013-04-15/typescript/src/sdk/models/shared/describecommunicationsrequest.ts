import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCommunicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=afterTime" })
  afterTime?: string;

  @SpeakeasyMetadata({ data: "json, name=beforeTime" })
  beforeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=caseId" })
  caseId: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
