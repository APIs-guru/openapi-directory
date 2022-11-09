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
var PutV3UsageBatchesIdPathParams = /** @class */ (function (_super) {
    __extends(PutV3UsageBatchesIdPathParams, _super);
    function PutV3UsageBatchesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutV3UsageBatchesIdPathParams.prototype, "id", void 0);
    return PutV3UsageBatchesIdPathParams;
}(SpeakeasyBase));
export { PutV3UsageBatchesIdPathParams };
var PutV3UsageBatchesIdRequest = /** @class */ (function (_super) {
    __extends(PutV3UsageBatchesIdRequest, _super);
    function PutV3UsageBatchesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutV3UsageBatchesIdPathParams)
    ], PutV3UsageBatchesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportUsageBatchRequest)
    ], PutV3UsageBatchesIdRequest.prototype, "request", void 0);
    return PutV3UsageBatchesIdRequest;
}(SpeakeasyBase));
export { PutV3UsageBatchesIdRequest };
var PutV3UsageBatchesIdResponse = /** @class */ (function (_super) {
    __extends(PutV3UsageBatchesIdResponse, _super);
    function PutV3UsageBatchesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutV3UsageBatchesIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutV3UsageBatchesIdResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ReportUsageBatchResponse)
    ], PutV3UsageBatchesIdResponse.prototype, "reportUsageBatchResponse", void 0);
    return PutV3UsageBatchesIdResponse;
}(SpeakeasyBase));
export { PutV3UsageBatchesIdResponse };
