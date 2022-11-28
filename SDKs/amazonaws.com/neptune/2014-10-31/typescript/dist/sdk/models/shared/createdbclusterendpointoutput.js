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
// CreateDbClusterEndpointOutput
/**
 * <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p>
**/
var CreateDbClusterEndpointOutput = /** @class */ (function (_super) {
    __extends(CreateDbClusterEndpointOutput, _super);
    function CreateDbClusterEndpointOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDbClusterEndpointOutput.prototype, "customEndpointType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDbClusterEndpointOutput.prototype, "dbClusterEndpointArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDbClusterEndpointOutput.prototype, "dbClusterEndpointIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDbClusterEndpointOutput.prototype, "dbClusterEndpointResourceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDbClusterEndpointOutput.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDbClusterEndpointOutput.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDbClusterEndpointOutput.prototype, "endpointType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], CreateDbClusterEndpointOutput.prototype, "excludedMembers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], CreateDbClusterEndpointOutput.prototype, "staticMembers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDbClusterEndpointOutput.prototype, "status", void 0);
    return CreateDbClusterEndpointOutput;
}(SpeakeasyBase));
export { CreateDbClusterEndpointOutput };
