var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PutGeofencePathParams = /** @class */ (function (_super) {
    __extends(PutGeofencePathParams, _super);
    function PutGeofencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CollectionName" }),
        __metadata("design:type", String)
    ], PutGeofencePathParams.prototype, "collectionName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=GeofenceId" }),
        __metadata("design:type", String)
    ], PutGeofencePathParams.prototype, "geofenceId", void 0);
    return PutGeofencePathParams;
}(SpeakeasyBase));
export { PutGeofencePathParams };
var PutGeofenceHeaders = /** @class */ (function (_super) {
    __extends(PutGeofenceHeaders, _super);
    function PutGeofenceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutGeofenceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutGeofenceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutGeofenceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutGeofenceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutGeofenceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutGeofenceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutGeofenceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutGeofenceHeaders;
}(SpeakeasyBase));
export { PutGeofenceHeaders };
// PutGeofenceRequestBodyGeometry
/**
 * <p>Contains the geofence geometry details.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
**/
var PutGeofenceRequestBodyGeometry = /** @class */ (function (_super) {
    __extends(PutGeofenceRequestBodyGeometry, _super);
    function PutGeofenceRequestBodyGeometry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Polygon" }),
        __metadata("design:type", Array)
    ], PutGeofenceRequestBodyGeometry.prototype, "polygon", void 0);
    return PutGeofenceRequestBodyGeometry;
}(SpeakeasyBase));
export { PutGeofenceRequestBodyGeometry };
var PutGeofenceRequestBody = /** @class */ (function (_super) {
    __extends(PutGeofenceRequestBody, _super);
    function PutGeofenceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Geometry" }),
        __metadata("design:type", PutGeofenceRequestBodyGeometry)
    ], PutGeofenceRequestBody.prototype, "geometry", void 0);
    return PutGeofenceRequestBody;
}(SpeakeasyBase));
export { PutGeofenceRequestBody };
var PutGeofenceRequest = /** @class */ (function (_super) {
    __extends(PutGeofenceRequest, _super);
    function PutGeofenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutGeofencePathParams)
    ], PutGeofenceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutGeofenceHeaders)
    ], PutGeofenceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutGeofenceRequestBody)
    ], PutGeofenceRequest.prototype, "request", void 0);
    return PutGeofenceRequest;
}(SpeakeasyBase));
export { PutGeofenceRequest };
var PutGeofenceResponse = /** @class */ (function (_super) {
    __extends(PutGeofenceResponse, _super);
    function PutGeofenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutGeofenceResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutGeofenceResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutGeofenceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutGeofenceResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PutGeofenceResponse)
    ], PutGeofenceResponse.prototype, "putGeofenceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutGeofenceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutGeofenceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutGeofenceResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutGeofenceResponse.prototype, "validationException", void 0);
    return PutGeofenceResponse;
}(SpeakeasyBase));
export { PutGeofenceResponse };
