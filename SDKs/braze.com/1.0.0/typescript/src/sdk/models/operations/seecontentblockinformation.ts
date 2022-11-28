import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SeeContentBlockInformationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content_block_id" })
  contentBlockId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_inclusion_data" })
  includeInclusionData?: string;
}


export class SeeContentBlockInformationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SeeContentBlockInformationQueryParams;
}


export class SeeContentBlockInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
