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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
import { EndpointDemographic } from "./endpointdemographic";
import { EndpointLocation } from "./endpointlocation";
import { EndpointUser } from "./endpointuser";
// EndpointResponse
/**
 * Provides information about the channel type and other settings for an endpoint.
**/
var EndpointResponse = /** @class */ (function (_super) {
    __extends(EndpointResponse, _super);
    function EndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", String)
    ], EndpointResponse.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationId" }),
        __metadata("design:type", String)
    ], EndpointResponse.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], EndpointResponse.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelType" }),
        __metadata("design:type", String)
    ], EndpointResponse.prototype, "channelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CohortId" }),
        __metadata("design:type", String)
    ], EndpointResponse.prototype, "cohortId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], EndpointResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Demographic" }),
        __metadata("design:type", EndpointDemographic)
    ], EndpointResponse.prototype, "demographic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", String)
    ], EndpointResponse.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointStatus" }),
        __metadata("design:type", String)
    ], EndpointResponse.prototype, "endpointStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], EndpointResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Location" }),
        __metadata("design:type", EndpointLocation)
    ], EndpointResponse.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Metrics" }),
        __metadata("design:type", Map)
    ], EndpointResponse.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OptOut" }),
        __metadata("design:type", String)
    ], EndpointResponse.prototype, "optOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestId" }),
        __metadata("design:type", String)
    ], EndpointResponse.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=User" }),
        __metadata("design:type", EndpointUser)
    ], EndpointResponse.prototype, "user", void 0);
    return EndpointResponse;
}(SpeakeasyBase));
export { EndpointResponse };
