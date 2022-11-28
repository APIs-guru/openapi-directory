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
export var GoogleCloudApigeeV1EnvironmentGroupStateEnum;
(function (GoogleCloudApigeeV1EnvironmentGroupStateEnum) {
    GoogleCloudApigeeV1EnvironmentGroupStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudApigeeV1EnvironmentGroupStateEnum["Creating"] = "CREATING";
    GoogleCloudApigeeV1EnvironmentGroupStateEnum["Active"] = "ACTIVE";
    GoogleCloudApigeeV1EnvironmentGroupStateEnum["Deleting"] = "DELETING";
    GoogleCloudApigeeV1EnvironmentGroupStateEnum["Updating"] = "UPDATING";
})(GoogleCloudApigeeV1EnvironmentGroupStateEnum || (GoogleCloudApigeeV1EnvironmentGroupStateEnum = {}));
// GoogleCloudApigeeV1EnvironmentGroup
/**
 * EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.
**/
var GoogleCloudApigeeV1EnvironmentGroup = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1EnvironmentGroup, _super);
    function GoogleCloudApigeeV1EnvironmentGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EnvironmentGroup.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostnames" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1EnvironmentGroup.prototype, "hostnames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EnvironmentGroup.prototype, "lastModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EnvironmentGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EnvironmentGroup.prototype, "state", void 0);
    return GoogleCloudApigeeV1EnvironmentGroup;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1EnvironmentGroup };
// GoogleCloudApigeeV1EnvironmentGroupInput
/**
 * EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.
**/
var GoogleCloudApigeeV1EnvironmentGroupInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1EnvironmentGroupInput, _super);
    function GoogleCloudApigeeV1EnvironmentGroupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostnames" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1EnvironmentGroupInput.prototype, "hostnames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1EnvironmentGroupInput.prototype, "name", void 0);
    return GoogleCloudApigeeV1EnvironmentGroupInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1EnvironmentGroupInput };
