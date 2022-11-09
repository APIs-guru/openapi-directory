import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLocationsRequestBodyAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=streetAndNumber" })
  streetAndNumber?: string;
}


export class PostLocationsRequestBodyCoordinates extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class PostLocationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=address" })
  address: PostLocationsRequestBodyAddress;

  @Metadata({ data: "json, name=chargestations" })
  chargestations?: any[];

  @Metadata({ data: "json, name=coordinates" })
  coordinates: PostLocationsRequestBodyCoordinates;

  @Metadata({ data: "json, name=operatorName" })
  operatorName: string;
}


export class PostLocationsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostLocationsRequestBody;
}


export class PostLocations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PostLocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postLocations200ApplicationJsonObject?: PostLocations200ApplicationJson;
}
