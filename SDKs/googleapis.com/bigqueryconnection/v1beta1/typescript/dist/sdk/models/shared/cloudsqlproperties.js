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
import { CloudSqlCredential } from "./cloudsqlcredential";
export var CloudSqlPropertiesTypeEnum;
(function (CloudSqlPropertiesTypeEnum) {
    CloudSqlPropertiesTypeEnum["DatabaseTypeUnspecified"] = "DATABASE_TYPE_UNSPECIFIED";
    CloudSqlPropertiesTypeEnum["Postgres"] = "POSTGRES";
    CloudSqlPropertiesTypeEnum["Mysql"] = "MYSQL";
})(CloudSqlPropertiesTypeEnum || (CloudSqlPropertiesTypeEnum = {}));
// CloudSqlProperties
/**
 * Connection properties specific to the Cloud SQL.
**/
var CloudSqlProperties = /** @class */ (function (_super) {
    __extends(CloudSqlProperties, _super);
    function CloudSqlProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credential" }),
        __metadata("design:type", CloudSqlCredential)
    ], CloudSqlProperties.prototype, "credential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], CloudSqlProperties.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceId" }),
        __metadata("design:type", String)
    ], CloudSqlProperties.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountId" }),
        __metadata("design:type", String)
    ], CloudSqlProperties.prototype, "serviceAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CloudSqlProperties.prototype, "type", void 0);
    return CloudSqlProperties;
}(SpeakeasyBase));
export { CloudSqlProperties };
// CloudSqlPropertiesInput
/**
 * Connection properties specific to the Cloud SQL.
**/
var CloudSqlPropertiesInput = /** @class */ (function (_super) {
    __extends(CloudSqlPropertiesInput, _super);
    function CloudSqlPropertiesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credential" }),
        __metadata("design:type", CloudSqlCredential)
    ], CloudSqlPropertiesInput.prototype, "credential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], CloudSqlPropertiesInput.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceId" }),
        __metadata("design:type", String)
    ], CloudSqlPropertiesInput.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CloudSqlPropertiesInput.prototype, "type", void 0);
    return CloudSqlPropertiesInput;
}(SpeakeasyBase));
export { CloudSqlPropertiesInput };
